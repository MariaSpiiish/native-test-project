import { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { Loading } from './Loading';

const PostImage = styled.Image`
    border-radius: 10px;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
`;

const PostText = styled.Text`
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 20px;
`;

export const FullPost = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState();
    const { id, title } = route.params;

    const fetchPost = () => {
        setIsLoading(true);
        fetch('https://api.slingacademy.com/v1/sample-data/blog-posts/' + id)
            .then((res) => {
                if(res.ok) {
                return res.json();
                }
                return Promise.reject();
            })
            .then((data) => {
                setPost(data.blog);
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        navigation.setOptions({
            title
        })
        fetchPost();
    }, []);

    if (isLoading) {
        return (
          <Loading />
        )
    }

    return (
        <ScrollView style={{ padding: 20 }}>
            <PostImage source={{ uri: post.photo_url}} />
            <PostText>{post.content_text}</PostText>
        </ScrollView>
    )
}