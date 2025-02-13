from django.shortcuts import render
from django.core.files.storage import default_storage
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from rest_framework import status
import cv2  # Example for OpenCV
import numpy as np

class ImageUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, *args, **kwargs):
        file_obj = request.FILES['image']
        file_path = default_storage.save(file_obj.name, file_obj)

        # Load and process the image
        img = cv2.imread(file_path)
        result = self.process_image(img)
        print(result)

        return Response({"result": result}, status=status.HTTP_200_OK)

    def process_image(self, img):
        # Perform model inference (dummy response for now)
        return "Processed image successfully"

