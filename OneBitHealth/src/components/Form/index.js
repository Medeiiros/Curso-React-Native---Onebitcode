import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import ResultImc from "../ResultImc"
import styles from "./styles"

export default function Form() {
  const [height, setHeight] = React.useState(null)
  const [weight, setWeight] = React.useState(null)
  const [messageImc, setMessageImc] = React.useState(
    "Preencha o Peso e a Altura"
  )
  const [imc, setImc] = React.useState(null)
  const [textButton, setTextButton] = React.useState("Calcular")

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2))
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu IMC é igual:")
      setTextButton("Calcular Novamente")
      return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o Peso e a Altura")
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        />

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex. 75.365"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
        />
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => validationImc()}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  )
}
