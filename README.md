<!-- {
	"info": {
		"_postman_id": "3e28340a-a0e0-4afa-981a-6bcfce04c5b5",
		"name": "interview",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "get products",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://dummyjson.com/products",
					"protocol": "https",
					"host": [
						"dummyjson",
						"com"
					],
					"path": [
						"products"
					]
				}
			},
			"response": []
		},
		{
			"name": "search product",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://dummyjson.com/products/search?q=phone",
					"protocol": "https",
					"host": [
						"dummyjson",
						"com"
					],
					"path": [
						"products",
						"search"
					],
					"query": [
						{
							"key": "q",
							"value": "phone"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "product category",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://dummyjson.com/products/categories",
					"protocol": "https",
					"host": [
						"dummyjson",
						"com"
					],
					"path": [
						"products",
						"categories"
					]
				}
			},
			"response": []
		},
		{
			"name": "category search",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://dummyjson.com/products/category/smartphones",
					"protocol": "https",
					"host": [
						"dummyjson",
						"com"
					],
					"path": [
						"products",
						"category",
						"smartphones"
					]
				}
			},
			"response": []
		}
	]
} -->