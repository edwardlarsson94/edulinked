import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { fetchPostData } from '@/app/services/post/post.service';
import { Texts } from '@/constants/Texts';
import { Colors } from '@/constants/Colors';

const PostCard = () => {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPostData();
        if (data && data.status) {
          setPostData(data.data[0]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color={Colors.light.title} />;
  }

  if (!postData) {
    return <Text>No data available</Text>;
  }

  const { user, content, reactions } = postData;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{ uri: user['avatar'] }}
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>{user['name']}</Text>
          <Text style={styles.time}>{new Date(user['timestamp']).toLocaleString()}</Text>
        </View>
        <TouchableOpacity style={styles.menuIcon}>
          <Ionicons name="ellipsis-horizontal" size={24} color={Colors.light.title} />
        </TouchableOpacity>
      </View>

      <Text style={styles.postText}>{content['text']}</Text>

      <View style={styles.interactionCounts}>
        <Text style={styles.interactionText}>❤️ {reactions['likes']}</Text>
        <Text style={styles.interactionText}>💬 {reactions['comments']} {Texts.post.comments}</Text>
        <Text style={styles.interactionText}>🔁 {reactions['shares']} {Texts.post.shares}</Text>
      </View>

      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart-outline" size={24} color={Colors.light.google} />
          <Text style={styles.actionText}>{Texts.post.reaction}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbox-outline" size={24} color={Colors.light.google} />
          <Text style={styles.actionText}>{Texts.post.post}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-outline" size={24} color={Colors.light.google} />
          <Text style={styles.actionText}>{Texts.post.share}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.light.SubTitle,
  },
  time: {
    fontSize: 12,
    color: Colors.light.SubTitle,
  },
  menuIcon: {
    padding: 5,
  },
  postText: {
    fontSize: 12,
    color: Colors.light.SubTitle,
    marginBottom: 10,
  },
  interactionCounts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  interactionText: {
    fontSize: 12,
    color: Colors.light.SubTitle,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: Colors.light.SubTitle,
    paddingTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
    fontSize: 12,
    color: Colors.light.SubTitle,
  },
});

export default PostCard;
