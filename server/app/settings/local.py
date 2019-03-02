from .default import *


DATABASES = {
    # Raises ImproperlyConfigured exception if DATABASE_URL not in os.environ
    'default': env.db('DJANGO_DB_URL')
}

ALLOWED_HOSTS = ['*']
