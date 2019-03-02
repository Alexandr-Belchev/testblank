import $ from 'jquery'
import "babel-polyfill"
window.$ = $
window.jQuery = $
$('.js-back').each((i, el) => {
  $(el).on('click', () => {
    setTimeout(() => {
      $('.modal[data-type="info"]').find('.modal__content').html('')
      $(el).closest('.modal').hide()
      $('.modal[data-type="verify"]').show()
    }, 100)
  })
})
$('input').each((i, el) => {
  $(el).keyup((e) => {
    if (e.which == 69) {
      $(el).val('')
    }
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      return false
    }
    if ($(el).val() > 1) {
      $(el).val($(el).val().slice(0, 1))
    }
    if (e.which != 8) {
      if ($('input')[i + 1] != undefined) {
        $('input')[i + 1].focus()
      } else {
        $('input')[i].blur()
      }
    } else {
      if ($('input')[i - 1] != undefined) {
        $('input')[i - 1].focus()
      }
    }
  })
})
$('.js-submit').on('click', (e) => {
  e.preventDefault()
  let identificator = $('form').serializeArray().map((el, i) => {
    return el.value
  })
  let xhr = new XMLHttpRequest()
  xhr.open("GET", `?id=${identificator.join('')}`, true)
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.send('')
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText)
        let fields = data.fields
        $('form')[0].reset()
        let template = `
        <div class="title center">${fields.identificator}</div>
        <div class="text">${fields.title}</div>
        <div class="text"><span>${fields.date.split('T')[0]}&nbsp;</span><span>Program ${fields.hours} hours</span></div>
        <div class="text">${fields.author}</div>
        <div class="text">Average rating: ${fields.rating}</div>
        `
        $('.modal[data-type="info"]').find('.modal__content').html($(template))
        $('.modal[data-type="verify"]').hide()
        $('.modal[data-type="info"]').show()
      } else {
        $('.modal[data-type="verify"]').hide()
        $('.modal[data-type="error"]').show()
      }
    }
  }
})
