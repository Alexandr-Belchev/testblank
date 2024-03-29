from django.dispatch import receiver
from rosetta.signals import post_save


@receiver(post_save)
def restart_server(sender, **kwargs):
    """
    Restart server after rosetta translations fix.
    """
    import os
    os.system("kill -HUP `cat /tmp/blank.pid`")
