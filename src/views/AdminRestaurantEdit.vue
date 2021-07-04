<template>
  <div class="container py-5">
    <AdminRestaurantForm 
      :initial-restaurant="restaurant"
      @after-submit="handleAfterSubmit" 
    />
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  components: {
    AdminRestaurantForm
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      }
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    handleAfterSubmit (formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    },
    async fetchRestaurant (restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId })
          const { 
          id,
          name,
          CategoryId: categoryId,
          tel,
          address,
          description,
          image,
          opening_hours: openingHours 
        } = data.restaurant

        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryId,
          tel,
          address,
          description,
          image,
          openingHours
        }
      } catch (error) {
        Toast.fire({  
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>