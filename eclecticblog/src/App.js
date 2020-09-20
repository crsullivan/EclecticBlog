import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav"
import Footer from "./Footer"
import History from "./History";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faEnvelope, faKey);

function App() {

  const Data = [
    {
      img: require("./images/2nd_easiest_way_use_graphql.PNG"),
      date: "September 14, 2020",
      title: "Second easiest way to use Graphql",
      content: "venenatis, neque sed interdum imperdiet, risus neque tincidunt mauris, non ultricies urna odio placerat velit. Sed ac nulla condimentum, eleifend augue vel, tempor dui. Phasellus placerat semper semper. Morbi malesuada felis quis lacus luctus, eu fermentum lorem hendrerit. Fusce quis fringilla risus, id tincidunt justo. Mauris facilisis sem suscipit, fringilla nulla vitae, laoreet elit. Ut volutpat, massa ac rutrum bibendum, dui urna venenatis turpis, non consectetur libero metus ut massa. Ut scelerisque ultrices tellus sed vestibulum. Praesent nec eros pretium, gravida turpis non, venenatis justo. Nam hendrerit semper ex sed lobortis. Sed auctor tortor nec nibh molestie malesuada. In tincidunt, leo a euismod faucibus, lectus sapien porta ligula, quis blandit nibh massa sit amet arcu. Proin porta diam id lacus mattis aliquam. Nullam sed molestie lacus, in auctor dui. Aenean tempus, nulla at posuere aliquam, ipsum velit blandit orci, ut varius ligula purus at erat. gravida turpis non, venenatis justo. Nam hendrerit semper ex sed lobortis. Sed auctor tortor nec nibh molestie malesuada. In tincidunt, leo a euismod faucibus, lectus sapien porta ligula, quis blandit nibh massa sit amet arcu. Proin porta diam id lacus mattis aliquam. Nullam sed molestie lacus, in auctor dui. Aenean tempus, nulla at posuere aliquam, ipsum velit blandit orci, ut varius ligula purus at erat."
    },
    {
      img: require("./images/knexHerokuMigrate.PNG"),
      date: "September 10, 2020",
      title: "Migrating to Heroku with Knex",
      content: "venenatis, neque sed interdum imperdiet, risus neque tincidunt mauris, non ultricies urna odio placerat velit. Sed ac nulla condimentum, eleifend augue vel, tempor dui. Phasellus placerat semper semper. Morbi malesuada felis quis lacus luctus, eu fermentum lorem hendrerit. Fusce quis fringilla risus, id tincidunt justo. Mauris facilisis sem suscipit, fringilla nulla vitae, laoreet elit. Ut volutpat, massa ac rutrum bibendum, dui urna venenatis turpis, non consectetur libero metus ut massa. Ut scelerisque ultrices tellus sed vestibulum. Praesent nec eros pretium, gravida turpis non, venenatis justo. Nam hendrerit semper ex sed lobortis. Sed auctor tortor nec nibh molestie malesuada. In tincidunt, leo a euismod faucibus, lectus sapien porta ligula, quis blandit nibh massa sit amet arcu. Proin porta diam id lacus mattis aliquam. Nullam sed molestie lacus, in auctor dui. Aenean tempus, nulla at posuere aliquam, ipsum velit blandit orci, ut varius ligula purus at erat."
    },
    {
      img: require("./images/reverse_singly_linked_list.PNG"),
      date: "September 8, 2020",
      title: "Singly Linked List",
      content: "venenatis, neque sed interdum imperdiet, risus neque tincidunt mauris, non ultricies urna odio placerat velit. Sed ac nulla condimentum, eleifend augue vel, tempor dui. Phasellus placerat semper semper. Morbi malesuada felis quis lacus luctus, eu fermentum lorem hendrerit. Fusce quis fringilla risus, id tincidunt justo. Mauris facilisis sem suscipit, fringilla nulla vitae, laoreet elit. Ut volutpat, massa ac rutrum bibendum, dui urna venenatis turpis, non consectetur libero metus ut massa. Ut scelerisque ultrices tellus sed vestibulum. Praesent nec eros pretium, gravida turpis non, venenatis justo. Nam hendrerit semper ex sed lobortis. Sed auctor tortor nec nibh molestie malesuada. In tincidunt, leo a euismod faucibus, lectus sapien porta ligula, quis blandit nibh massa sit amet arcu. Proin porta diam id lacus mattis aliquam. Nullam sed molestie lacus, in auctor dui. Aenean tempus, nulla at posuere aliquam, ipsum velit blandit orci, ut varius ligula purus at erat."
    },
  ]
  

  return (
    <Router history={History}>
      <Nav />
        <div className="App">
          {Data.map(data => (
            <>
              <h1 className="date">{data.date}</h1>
              <div className="postContainer">
                <img className="picture" src={data.img}></img>
                <div className="content">
                  <h2>{data.title}</h2>
                  <p>{data.content}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      <Footer />
    </Router>
  );
}

export default App;
