<template>
  <InputText
    v-model="val"
    :type="type"
    :placeholder="placeholder"
    :class="errorMessage ? 'p-invalid' : ''"
    v-bind="$attrs"
  />
  <small class="p-error">
    {{ errorMessage || '&nbsp;' }}
  </small>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import InputText from 'primevue/inputtext'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  fieldName: string
  placeholder?: string
  type?: string
}>()

const { value: val, errorMessage } = useField<string>(() => props.fieldName)
</script>
