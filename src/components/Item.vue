<template>
  <ion-card>
    <img src="https://via.placeholder.com/150" style="height:300px !important"/>
    <ion-card-content>
      <ion-card-title>
        Nine Inch Nails Live
        </ion-card-title>
      <p>
        The most popular industrial group ever, and largely
        responsible for bringing the music to a mass audience.
      </p>
    </ion-card-content>
    <ion-row class="row" no-padding="">
      <slot name="slot-add"></slot>
    </ion-row>
  </ion-card>
</template>
