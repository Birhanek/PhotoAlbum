//eslint-disable-next-line
import PropTypes from "prop-types";
import {v4 as uuidv4} from "uuid";
import Header from "./components/Header/Header";
import Photos from "./components/Photos/Photos";

import style from "./app.module.css";

function App() {
  const photos =[
      {
        "key":uuidv4(),
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "key":uuidv4(),
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
      {
        "key":uuidv4(),
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
      },
      {
        "key":uuidv4(),
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
      },
      {
        "key":uuidv4(),
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
      },
      {
        "key":uuidv4(),
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
      },
      {
        "key":uuidv4(),
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
      },
      {
        "key":uuidv4(),
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "url": "https://via.placeholder.com/600/54176f",
        "thumbnailUrl": "https://via.placeholder.com/150/54176f"
      },
      {
        "key":uuidv4(),
        "id": 9,
        "title": "qui eius qui autem sed",
        "url": "https://via.placeholder.com/600/51aa97",
        "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
      },
      {
        "key":uuidv4(),
        "id": 10,
        "title": "beatae et provident et ut vel",
        "url": "https://via.placeholder.com/600/810b14",
        "thumbnailUrl": "https://via.placeholder.com/150/810b14"
      },
      {
        "key":uuidv4(),
        "id": 11,
        "title": "nihil at amet non hic quia qui",
        "url": "https://via.placeholder.com/600/1ee8a4",
        "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
      },
      {
        "key":uuidv4(),
        "id": 12,
        "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        "url": "https://via.placeholder.com/600/66b7d2",
        "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
      },
      {
        "key":uuidv4(),
        "id": 13,
        "title": "repudiandae iusto deleniti rerum",
        "url": "https://via.placeholder.com/600/197d29",
        "thumbnailUrl": "https://via.placeholder.com/150/197d29"
      },
      {
        "key":uuidv4(),
        "id": 14,
        "title": "est necessitatibus architecto ut laborum",
        "url": "https://via.placeholder.com/600/61a65",
        "thumbnailUrl": "https://via.placeholder.com/150/61a65"
      },
      {
        "key":uuidv4(),
        "id": 15,
        "title": "harum dicta similique quis dolore earum ex qui",
        "url": "https://via.placeholder.com/600/f9cee5",
        "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
      },
      {
        "key":uuidv4(),
        "id": 16,
        "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
        "url": "https://via.placeholder.com/600/fdf73e",
        "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
      },
      {
        "key":uuidv4(),
        "id": 17,
        "title": "natus doloribus necessitatibus ipsa",
        "url": "https://via.placeholder.com/600/9c184f",
        "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
      },
      {
        "key":uuidv4(),
        "id": 18,
        "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
        "url": "https://via.placeholder.com/600/1fe46f",
        "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
      },
      {
        "key":uuidv4(),
        "id": 19,
        "title": "perferendis nesciunt eveniet et optio a",
        "url": "https://via.placeholder.com/600/56acb2",
        "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
      },
      {
        "key":uuidv4(),
        "id": 20,
        "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
        "url": "https://via.placeholder.com/600/8985dc",
        "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
      },
      {
        "key":uuidv4(),
        "id": 21,
        "title": "ad et natus qui",
        "url": "https://via.placeholder.com/600/5e12c6",
        "thumbnailUrl": "https://via.placeholder.com/150/5e12c6"
      },
      {
        "key":uuidv4(),
        "id": 22,
        "title": "et ea illo et sit voluptas animi blanditiis porro",
        "url": "https://via.placeholder.com/600/45601a",
        "thumbnailUrl": "https://via.placeholder.com/150/45601a"
      }
  ];

  return (
        <div className={style.App}>
          <Header header="B-shops" />
          <Photos photos={photos}/>
        </div>     
  );
}
App.prototype ={
  photos:PropTypes.array
};
export default App;
