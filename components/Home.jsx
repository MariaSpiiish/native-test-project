import { useState, useEffect } from 'react';
import {
  ScrollView,
  RefreshControl,
  TouchableOpacity
} from 'react-native';
import { Post } from './Post';
import { Loading } from './Loading';

export const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchPosts = () => {
    setIsLoading(true)
    fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30')
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject();
      })
      .then((data) => {
        setItems(data.blogs);
      })
      .catch((err) => console.log(err, 'Heck'))
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}>
      {
        items.map(item => (
           <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Post', { id: item.id, title: item.title })}>
             <Post title={item.title} image={item.photo_url} date={item.created_at}></Post>
           </TouchableOpacity>
        ))
      }
    </ScrollView>
  );
}