<template>
  <ion-page>
    <ion-header>

      <ion-toolbar class="toolbar-md-primary">
        <ion-title>Daftar Makanan Update</ion-title>
      </ion-toolbar>

    </ion-header>
    <ion-content class="content">

      <ion-list>
        <ion-item v-for="(item,index) in read" :key="index">
            <!-- {{ item.title }} -->
            <Item :item="item">
              <template v-slot:slot-add>
                <ion-col class="col" text-center="">
                  <button @click="add(item)" clear="" color="danger" icon-start="" ion-button="" small="" class="disable-hover button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span class="button-inner">
                    Tambah
                  </span><div class="button-effect"></div></button>
                </ion-col>
              </template>
            </Item>
        </ion-item>
      </ion-list>

      <!-- <ion-fab-button class="todo-fab" @click="addTodo">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button> -->
    </ion-content>
    <ion-footer>
    <ion-toolbar>
        <ion-title>Total : {{ total }}</ion-title>
        <div class="">
          <button @click="addTodo" style="float-right" type="button" name="button">Lanjut Pembayaran</button>
        </div>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>
<script>
// import axios from 'axios';
import {db} from './../db';
import Item from './Item';
export default {
  components:{
    Item
  },
  mounted(){
    let self = this;
    self.readData();
    // self.addData();
  },
  data() {
    return {
      items: [],
      ref: db.collection('daftar_makanan'),
    }
  },
  methods: {
    add(item){
        // alert(JSON.stringify(item));
        this.$store.dispatch('save_transaksi',item);
    },
    addTodo() {
      // this.$router.push({path: '/daftar_makanan/add'})
      this.$router.push({path: '/transaksi'});
    },
    addData(){
      db.collection("daftar_makanan").add({
         title:"Nasi Warteg",
         harga:100000,
         note:"Tanpa Warteg",
         url:"http"
      })
      .then(function(docRef) {
          // console.log("Document written with ID: ", docRef.id);
          alert(docRef.id);
      })
      .catch(function(error) {
        alert(error);
          // console.error("Error adding document: ", error);
      });
    },
    readData(){
      let self = this;
      db.collection("daftar_makanan").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // console.log(`${doc.id} => ${doc.data()}`);
              self.items.push(doc.data());
          });
      });

    }
  },
  created() {
    // axios.get('http://localhost:3001/todos')
    //   .then(res => this.todos = res.data)
  },
  computed:{
    read(){
      return this.items;
    },
    total(){
      let a = 0;

       this.$store.state.transaksi.forEach((val)=>{
         a = a + parseInt(val.harga);
       });
       return a;
    }
  }
}
</script>
<style>
.todo-fab {
  position: fixed;
  bottom: 25px;
  right: 15px;
  font-size: 30px;
}

.content {
  padding: 10px 10px 10px 0px
}

.toolbar-background-md {
    color: #FFF !important;
    border-color: #488aff !important;
    background: #488aff !important;
}
.toolbar-title-md {
    padding: 0 12px;
    font-size: 20px;
    font-weight: 500;
    color: #ffffff !important;
}
</style>
