from rest_framework import viewsets, parsers
from .models import S3Box
from .serializers import S3BoxSerializer

class S3BoxViewset(viewsets.ModelViewSet):
 
    queryset = S3Box.objects.all()
    serializer_class = S3BoxSerializer
    parser_classes = [parsers.MultiPartParser, parsers.FormParser]
    http_method_names = ['get', 'post', 'patch', 'delete']