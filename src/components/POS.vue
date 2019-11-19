<template>
  <ion-page>
    <ion-header class="toolbar-md-primary">

      <ion-toolbar>
        <ion-title>Transaksi</ion-title>
      </ion-toolbar>

    </ion-header>
    <ion-content class="content">


      <ion-item>
        <ion-input :value="model.name" @input="changeInput('name')" ref="name" placeholder="Atas nama"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input :value="harga" @input="changeInput('harga')" ref="harga" placeholder="Harga"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input :value="model.bayar" @input="changeInput('bayar')" ref="bayar" placeholder="Bayar"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input :value="model.kembali" @input="changeInput('kembali')" ref="kembali" placeholder="Kembalian"></ion-input>
      </ion-item>


      <ion-fab-button class="todo-fab" @click="addData()">
        <ion-icon name="checkmark" ></ion-icon>
      </ion-fab-button>

    </ion-content>
  </ion-page>
</template>

<script>
import {db} from './../db'
export default {
  data(){
    return {
      model:{
        harga:null,
        name:null,
        bayar:0,
        kembali:null,

      }
    }
  },
  computed:{
    harga(){
      let a = 0;
       this.$store.state.transaksi.forEach((val)=>{
         a = a + parseInt(val.harga);
       });
       return a;
    }
  },
  watch:{
    "model.bayar":function(){
      // let self = this;
      // self.model.kembali = parseInt(self.model.bayar) - parseInt(self.model.harga);
    }
  },
  methods:{
    changeInput(param){
      if(param == "harga"){
       this.model.harga = this.$refs.harga.value
     }else if(param == "name"){
        this.model.name = this.$refs.name.value
      }else if(param == "bayar"){
        this.model.bayar = this.$refs.bayar.value
        this.model.kembali = parseInt(this.model.bayar) - parseInt(this.model.harga);

      }
    },
    addData(){
      let self = this;
       db.collection("transaksi").add({
           name:self.model.name,
           harga:self.model.harga,
           bayar:self.model.bayar,
           kembali:self.model.kembali,
           status:0
        })
      .then(function() {
          // console.log("Document written with ID: ", docRef.id);
          self.$router.push({path: '/daftar_makanan'})
      })
      .catch(function(error) {
        alert(error);
          // console.error("Error adding document: ", error);
      });
    }
  }
}
</script>
