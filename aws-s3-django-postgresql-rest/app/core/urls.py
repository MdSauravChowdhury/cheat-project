from rest_framework.routers import SimpleRouter
from .views import S3BoxViewset

router = SimpleRouter()
router.register('accounts', S3BoxViewset)
urlpatterns = router.urls