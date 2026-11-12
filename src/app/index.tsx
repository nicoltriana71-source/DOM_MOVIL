import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Registro = {
  id: string;
  numero: number;
  hora: string;
};

export default function App() {
  const [contador, setContador] = useState<number>(0);
  const [registros, setRegistros] = useState<Registro[]>([]);

  const incrementarContador = () => {
    const nuevoContador = contador + 1;

    setContador(nuevoContador);

    setRegistros([
      ...registros,
      {
        id: Date.now().toString(),
        numero: nuevoContador,
        hora: new Date().toLocaleTimeString(),
      },
    ]);
  };

  const restarLike = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const reiniciarContador = () => {
    setContador(0);
    setRegistros([]);
  };

  return (
    <View style={estilos.body}>
      <Text
        style={[
          estilos.counterBox,
          contador > 10 ? estilos.colorAlto : estilos.colorNormal,
        ]}
      >
        {contador}
      </Text>

      <Text style={estilos.titulo}>
        {contador > 10 ? "¡Muchos Likes!" : "Contador de Likes"}
      </Text>

      {/* Botones */}
      <View style={estilos.botonesContainer}>
        <TouchableOpacity
          style={estilos.btnClick}
          onPress={incrementarContador}
        >
          <Text style={estilos.btnText}>Dar Like</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.btnRestar} onPress={restarLike}>
          <Text style={estilos.btnText}>Restar Like</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.btnReiniciar}
          onPress={reiniciarContador}
        >
          <Text style={estilos.btnText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>

      {/* Tabla de registros */}
      <View style={estilos.tableContainer}>
        <View style={estilos.tableHeader}>
          <Text style={[estilos.th, estilos.cellNumero]}>N° Like</Text>

          <Text style={[estilos.th, estilos.cellHora]}>Hora</Text>
        </View>

        <ScrollView style={estilos.tableBody}>
          {registros.map((item, index) => (
            <View
              key={item.id}
              style={[estilos.tr, index % 2 === 0 ? estilos.trEven : null]}
            >
              <Text style={[estilos.td, estilos.cellNumero]}>
                {item.numero}
              </Text>

              <Text style={[estilos.td, estilos.cellHora]}>{item.hora}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#f4f7f6",
    padding: 20,
    justifyContent: "center",
  },

  counterBox: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  colorNormal: {
    color: "#3498db",
  },

  colorAlto: {
    color: "#27ae60",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333333",
  },

  botonesContainer: {
    gap: 10,
    marginBottom: 20,
  },

  btnClick: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },

  btnRestar: {
    backgroundColor: "#e67e22",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },

  btnReiniciar: {
    backgroundColor: "#e74c3c",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },

  btnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  tableContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    overflow: "hidden",
  },

  trEven: {
    backgroundColor: "#fafafa",
  },

  th: {
    color: "#7f8c8d",
    fontWeight: "600",
    fontSize: 14,
    padding: 10,
    textAlign: "center",
  },

  td: {
    color: "#333333",
    fontSize: 14,
    padding: 10,
    textAlign: "center",
  },

  cellNumero: {
    flex: 1,
  },

  cellHora: {
    flex: 1.5,
  },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },

  tableBody: {
    maxHeight: 170,
  },

  tr: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#ffffff",
  },
});
