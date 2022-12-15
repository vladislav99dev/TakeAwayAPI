# TakeAwayAPI
Express and AtlasDB used in this project

/api/v1/restaunrants {
      GET  / {
             getAllRestaurants,
      }
      
      GET  /:restaunratID {
             getRastaurantById,
      }
      
      POST  / {
            createNewRestaurant,
      }
      
      PATCH  /:restaurantID {
            updateRestaurantById,
      }
      
      DELETE  /:restaurantID {
            deleteRestaurantByID,
      }
}
