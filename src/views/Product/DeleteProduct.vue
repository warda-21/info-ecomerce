
<script>

    import axios from 'axios'
    import swal from 'sweetalert'
    export default {
        data() {
            return {
                product: null,
                id: null
            }
        },
        props: ["baseURL", "products"],
        methods: {
            async deleteProduct() {
                await axios.delete(`${this.baseURL}/product/delete/${this.id}`,
                    this.product)
                    .then(() => {
                        swal({
                            text: "product has been deleted successfully",
                            icon: "success"
                        })
                    }).catch(err => console.log('err', err));
            }
        },
        mounted() {
            this.id = this.$route.params.id;
            this.product = this.products.find(product => product.id == this.id)
        }
    }
</script>


