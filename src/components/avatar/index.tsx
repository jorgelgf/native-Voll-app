import styled from 'styled-components/native';

type AvatarProps = {
  url: string
}

export const Avatar = ({ url }: AvatarProps) => {

  return <Img source={{ uri: url }} />
}

const Img = styled.Image`
 height: 70px;
 width: 70px;
 border-radius: 50px;
 text-align: center;
`;

