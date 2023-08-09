import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  overflow-y: scroll;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

const PostDetails = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const PostDate = styled.Text`
  font-size: 12px;

  margin-top: 2px;
`;

const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + '...';
  }

  return str;
}

export const Post = ({image, title, date}) => {
    return (
        <PostView>
            <PostImage source={{ uri: image}}/>

            <PostDetails>
                <PostTitle>{truncateTitle(title)}</PostTitle>
                <PostDate>{date}</PostDate>
            </PostDetails>
        </PostView>
    )

}