import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, BreeSerif_400Regular } from "@expo-google-fonts/bree-serif";

export default function Home() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    BreeSerif_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container_header}>
        <View style={styles.container_nav}>
          <Image
            source={require("../../../assets/miniLogo.png")}
            resizeMode="contain"
          />
          <View style={styles.nav_links}>
            <TouchableOpacity style={styles.touchableopacity_header}>
              <Text style={styles.txt_links}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableopacity_header}>
              <Text style={styles.txt_links}>Perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require("../../../assets/lineHeader.png")}
          style={{ marginTop: 10 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.container_body}>
        <View style={styles.up_body}>
          <Text style={styles.txt_msm_usuario}>Olá ?????</Text>
          <TouchableOpacity style={styles.bt_gerar_dieta}>
            <Text style={styles.txt_bt_gerarDieta}>Gerar Dieta</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scrollView_body}>
          <View style={styles.conteiner_calorias}>
            <View style={styles.header_calorias}>
              <Text style={styles.h1_calorias}>Calorias</Text>
              <Text style={styles.p_calorias}>Restante = Meta - Alimentos</Text>
            </View>
            <View style={styles.body_calorias}>
              <View style={styles.rightBody_calorias}>
                <Text>0.000</Text>
                <Text>Restante</Text>
              </View>
              <View style={styles.leftBody_calorias}>
                <Text>Proteinas 000.0g</Text>
                <Text>Carbo 000.0g</Text>
                <Text>Gordura 000.0g</Text>
              </View>
            </View>
          </View>
          <View style={styles.conteiner_peso}></View>
          <View style={styles.conteiner_cafeManha}></View>
          <View style={styles.conteiner_lanche}></View>
          <View style={styles.conteiner_almoco}></View>
          <View style={styles.conteiner_lancheTarde}></View>
          <View style={styles.conteiner_janta}></View>
          <View style={styles.conteiner_lancheNoite}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
  },

  container_header: {
    width: "80%",
    alignItems: "center",
    marginTop: 100,
  },

  touchableopacity_header: {
    height: 50,
  },

  container_nav: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nav_links: {
    flexDirection: "row",
    top: 8,
  },

  txt_links: {
    color: "#B5B2C6",
    fontSize: 34,
    paddingHorizontal: 10,
    fontFamily: "BreeSerif_400Regular",
  },

  container_body: {
    width: "85%",
    marginTop: 10,
  },

  up_body: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  txt_msm_usuario: {
    color: "#B5B2C6",
    fontSize: 34,
    fontFamily: "BreeSerif_400Regular",
  },

  bt_gerar_dieta: {
    backgroundColor: "#B5B2C6",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    borderRadius: 20,
    shadowColor: "#747281",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 4,
    shadowRadius: 3,
  },

  txt_bt_gerarDieta: {
    color: "#E6E3F6",
    fontSize: 20,
    fontFamily: "BreeSerif_400Regular",
  },

  scrollView_body: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "red",
  },

  conteiner_calorias: {
    width: "90%",
    height: 250,
    backgroundColor: "#e4e0f2",
    borderRadius: 24,
    elevation: 5,
    marginBottom: 30,
  },

  conteiner_peso: {
    width: "65%",
    height: 170,
    backgroundColor: "#e4e0f2",
    borderRadius: 24,
    elevation: 5,
    marginBottom: 30,
  },

  conteiner_cafeManha: {
    width: "85%",
    height: 130,
    backgroundColor: "#e4e0f2",
    borderRadius: 24,
    elevation: 5,
    marginBottom: 30,
  },

  conteiner_lanche: {
    width: "85%",
    height: 130,
    backgroundColor: "#e4e0f2",
    borderRadius: 24,
    elevation: 5,
    marginBottom: 30,
  },

  conteiner_almoco: {
    width: "85%",
    height: 130,
    backgroundColor: "#e4e0f2",
    borderRadius: 24,
    elevation: 5,
    marginBottom: 30,
  },

  conteiner_lancheTarde: {
    width: "85%",
    height: 130,
    backgroundColor: "#e4e0f2",
    borderRadius: 24,
    elevation: 5,
    marginBottom: 30,
  },

  conteiner_janta: {
    width: "85%",
    height: 130,
    backgroundColor: "#e4e0f2",
    borderRadius: 24,
    elevation: 5,
    marginBottom: 30,
  },

  conteiner_lancheNoite: {
    width: "85%",
    height: 130,
    backgroundColor: "#e4e0f2",
    borderRadius: 24,
    elevation: 5,
    marginBottom: 30,
  },
});
