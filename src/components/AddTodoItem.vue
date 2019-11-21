<template>
  <ion-page>
    <ion-header class="toolbar-md-primary">

      <ion-toolbar>
        <ion-title>Tambah makanan</ion-title>
      </ion-toolbar>

    </ion-header>
    <ion-content class="content">

      <ion-item>
        <ion-input :value="model.harga" @input="changeInput('harga')" ref="harga" placeholder="Harga"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input :value="model.title" @input="changeInput('title')" ref="title"  placeholder="Title"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input :value="model.note" @input="changeInput('note')" ref="note"  placeholder="Note"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input :value="model.url" @input="changeInput('url')" ref="url"  placeholder="URL"></ion-input>
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
        title:null,
        note:null,
        url:null
      }
    }
  },
  methods:{
    changeInput(param){
      if(param == "harga"){
       this.model.harga = this.$refs.harga.value
      }else if(param == "note"){
        this.model.note = this.$refs.note.value
      }else if(param == "title"){
        this.model.title = this.$refs.title.value
      }else if(param == "url"){
       this.model.url = this.$refs.url.value
      }
    },
    addData(){
      let self = this;
     db.collection("daftar_makanan").add({
         title:self.model.title,
         harga:self.model.harga,
         note:self.model.note,
         url:self.model.url
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