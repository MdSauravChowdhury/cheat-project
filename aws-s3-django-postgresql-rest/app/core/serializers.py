from rest_framework import serializers
from .models import S3Box

class S3BoxSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = S3Box
        fields = '__all__'