// import React, {useState, useEffect} from 'react';
// import {FlatList} from 'react-native';
// import ListItem from './ListItem';

// const url =
//   'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';

// const List = () => {
//   const [mediaArray, setMediaArray] = useState([]);

//   useEffect(() => {
//     const loadMedia = async () => {
//       try {
//         const response = await fetch(url);
//         console.log(response);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const json = await response.json();
//         setMediaArray(json);
//       } catch (error) {
//         console.error('Error loading media:', error);
//       }
//     };

//     loadMedia();
//   }, []);
//   return (
//     <FlatList
//       data={mediaArray}
//       renderItem={({item}) => <ListItem singleMedia={item} />}
//       keyExtractor={(item) =>
//         item.key ? item.key.toString() : item.filename.toString()
//       }
//     />
//   );
// };

// export default List;

import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {useMedia} from '../hooks/ApiHooks';

const List = () => {
  const {mediaArray} = useMedia();

  return (
    <FlatList
      data={mediaArray}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;
