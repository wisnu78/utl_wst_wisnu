<template>
  <ion-card>
    <img src="https://via.placeholder.com/150" style="height:300px !important"/>
    <ion-card-content>
      <ion-card-title>
       {{ item.title }}
        </ion-card-title>
      <p>
       {{ item.note }}
      </p>
    </ion-card-content>
    <ion-row class="row" no-padding="">
      <slot name="slot-add"></slot>
    </ion-row>
  </ion-card>
</template>
<script>
export default {
  props:['item']
}
</script>
