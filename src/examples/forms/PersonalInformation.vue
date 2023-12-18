<template>
  <div class="pi-form-examples">
    <h2 class="section-label" id="pi-form">
      Example w/ Validation
      <a aria-current="page" href="#pi-form">#</a>
    </h2>
    <div class="content mx-auto max-w-2xl">
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-2">
          <label for="first-name" class="block text-sm font-medium leading-6"> First name </label>
          <div class="mt-2">
            <TextInputValidate type="text" fieldName="firstName" class="w-full" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="last-name" class="block text-sm font-medium leading-6"> Middle name </label>
          <div class="mt-2">
            <TextInputValidate type="text" fieldName="middleName" class="w-full" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="last-name" class="block text-sm font-medium leading-6"> Last name </label>
          <div class="mt-2">
            <TextInputValidate type="text" fieldName="lastName" class="w-full" />
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6"> Email address </label>
          <div class="mt-2">
            <TextInputValidate type="text" fieldName="email" class="w-full" />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="country" class="block text-sm font-medium leading-6"> Country </label>
          <div class="mt-2">
            <Dropdown
              v-model="countryValue"
              :options="countries"
              optionLabel="name"
              optionValue="value"
              placeholder="Select a Country"
              class="w-full"
              :class="{ 'p-invalid': countryError }"
            />
            <small class="p-error" id="dd-error">{{ countryError || '&nbsp;' }}</small>
          </div>
        </div>

        <div class="col-span-full">
          <label for="street-address" class="block text-sm font-medium leading-6">
            Street address
          </label>
          <div class="mt-2">
            <TextInputValidate type="text" fieldName="address.street1" class="w-full" />
          </div>
        </div>

        <div class="sm:col-span-2 sm:col-start-1">
          <label for="city" class="block text-sm font-medium leading-6"> City </label>
          <div class="mt-2">
            <TextInputValidate type="text" fieldName="address.city" class="w-full" />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="region" class="block text-sm font-medium leading-6"> State / Province </label>
          <div class="mt-2">
            <TextInputValidate type="text" fieldName="address.state" class="w-full" />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="postal-code" class="block text-sm font-medium leading-6">
            ZIP / Postal code
          </label>
          <div class="mt-2">
            <TextInputValidate type="text" fieldName="address.zip" class="w-full" />
          </div>
        </div>
        <div class="col-span-full">
          <div class="flex flex-row justify-end gap-4">
            <Button label="Reset" severity="secondary" outlined @click="onResetForm" />
            <Button label="Save" icon="pi pi-save" iconPos="right" @click="onSubmit" />
          </div>
        </div>
        <div class="col-span-full">VeeValidate Meta: {{ meta }}</div>
        <div class="col-span-full">Form Values: {{ values }}</div>
        <div class="col-span-full">SubmittedValues: {{ submittedValues }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'

import { useField, useForm } from 'vee-validate'
import { object, string } from 'yup'
import { toTypedSchema } from '@vee-validate/yup'

import TextInputValidate from '../../components/TextInputValidate.vue'
import { ref } from 'vue'

const countries = [{ name: 'United States', value: 'US' }]

const { meta, handleSubmit, resetForm, values } = useForm({
  validationSchema: toTypedSchema(
    object({
      firstName: string().required().default('Proper Text Default'),
      middleName: string().required().default(undefined),
      lastName: string().required().default(null),
      email: string().email().required(),
      address: object({
        street1: string().required(),
        city: string().required(),
        state: string().required(),
        zip: string().min(5).required(),
        country: string().required()
      })
        .notRequired()
        .default(null),
      object2: object({}).default(null),
      object3: object({ prop1: string().required() }).default(null),
      object4: object({ prop1: string().required() }).default(null)
    })
  )
})

const { value: countryValue, errorMessage: countryError } = useField('address.country')
const { value: obj4Prop1Value, errorMessage: obj4Prop1Error } = useField('object4.prop1')

const submittedValues = ref<any | undefined>()

const onSubmit = handleSubmit((formValues?: any) => {
  submittedValues.value = formValues
})

const onResetForm = () => {
  resetForm()
}
</script>

<style scoped></style>
