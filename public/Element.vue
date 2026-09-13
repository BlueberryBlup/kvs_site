<script setup>
const props = defineProps({
  item: Object,
  isEven: Boolean,
})

const emit = defineEmits(['update'])

function updateItem() {
  emit('update', props.item)
}
</script>

<template>
  <ul class="list-item" :class="{ even: isEven }">
    <li class="ID">{{ item.id }}</li>
    <li class="Article">{{ item.article }}</li>
    <li class="Type">{{ item.type }}</li>
    <li class="Heading">{{ item.title }}</li>
    <li class="Cat">{{ item.category }}</li>
    <li class="Active">{{ item.active }}</li>
  </ul>
</template>

<style scoped>
.list-item {
  list-style: none;
  font-family: 'PT Root UI', sans-serif;
  display: flex;
  flex-direction: row;
  color: #292f36;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1em;
  max-width: 1620px;
  margin: 0 auto;
  padding: 0;
}

.list-item.even {
  background-color: #f5f5f5;
}

.list-item li {
  display: flex;
  align-items: center;
  height: 46px;
  padding: 0 10px;
  box-sizing: border-box;
  white-space: nowrap;
}

.ID {
  width: 196px;
}
.Article {
  width: 254.25px;
}
.Type {
  width: 254.25px;
}
.Heading {
  width: 407px;
}
.Cat {
  width: 254.25px;
}
.Active {
  width: 254.25px;
}
</style>
