import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView, ActivityIndicator } from "react-native";

// API base URL (ensure to use the correct one for your setup)
const API_BASE_URL = "http://127.0.0.1:8000/api/properties/feed/";

export default function PropertyFeed() {
  const [properties, setProperties] = useState([]);  // Store properties data
  const [loading, setLoading] = useState(true); // Track loading state

  // Function to fetch data
  const propertyList = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}`);
      const result = await response.text();  // Get raw response as text for debugging
      console.log("Raw response:", result);  // Log the raw response to check what is returned
  
      const data = JSON.parse(result);  // Try to parse the response as JSON
      setProperties(data);  // Set the fetched properties into the state
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  // Fetch properties when the component mounts
  useEffect(() => {
    propertyList();
  }, []);

  // Render properties
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />  // Show loading indicator
      ) : ( <Text>rya8s fiou</Text>)
    
  }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  propertyCard: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  propertyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
