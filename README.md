# Django project starter

## New project creation

For that you'll need a [cookiecutter](https://github.com/audreyr/cookiecutter).

After instalation simply run:

```bash
cookiecutter https://gitlab.com/webcase/django-project-starter
```

And answer the simple questions, that script will ask you for.

That's it, project scaffolding is ready.

### Instalation

To run the project you have to install **docker**.

You can read about installation here https://docs.docker.com/install/, just choose your OS.

For UNIX users - nothing else.

For WINDOWS users - you have to install MAKE by your own.

#### How to use it

Run `make start`. Backend and frontend will starts automatically.

If you wish to start only frontend or backend run:

`make frontend`

or

`make backend`


Documentation for the develoment process is included into the project itself [here](./blank/README.md). So after instalation it will stay with you.

#NOTE: To change environmental variables specified in .env file you have to restart environment
