

import React from 'react';

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  /*BackGround*/
   main_screen:{
    position: 'relative',
    width: 375,
    height: 667,

    backgroundColor: '#56CCF2'
  },

  /*Rectangles*/
  rectangle_header: {

    position: 'absolute',
    width: 375,
    height: 70,
    left: 0,
    top: -63+ -4,

    backgroundColor: '#2D9CDB',
    // box-shadow: 0 4 4 rgba(0, 0, 0, 0.25),

  },

  rectangle_washer: {
    position: 'absolute',
    width: 320,
    height: 224,
    left: 27.04,
    top: -63+ 106.5,

    backgroundColor: '#F2F2F2',
    // boxShadow: inset 0 4 4 rgba(0, 0, 0, 0.25),
    borderRadius: 19,

  },

  rectangle_dryer:{
    position: 'absolute',
    width: 320,
    height: 224,
    left: 27.04,
    top: -63+ 372,
    backgroundColor: '#F2F2F2',
    borderRadius: 19,
  },

  /******************/

/*Rectangle Texts*/
  header_text:{
    position: 'absolute',
    width: 197,
    height: 66,
    left: 89,
    top: -63+ 0,
    fontFamily: 'Cochin',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 80  ,
    fontSize: 24,
    textAlign: 'center',

    color: '#F2F2F2',

  },


   washer_text: {
      position: 'absolute',
      width: 112,
      height: 41,
      left: 33.04,
      top: -63+ 105.5,//105

      fontFamily: 'Cochin',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: 40,
      fontSize: 24,
      textAlign: 'center',

      color: '#F2F2F2',
   },


   dryer_text:{
    position: 'absolute',
    width: 112,
    height: 41,
    left: 24,
    top: -63+ 371,

    fontFamily: 'Cochin',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 40,
    fontSize: 24,
    textAlign: 'center',

    color: '#F2F2F2',

  },

  /******************/

  /*Washer Union Rectangles*/

  // washer_union_rectangle_1:{

  //   position: 'absolute',
  //   width: 320,
  //   height: 21,
  //   left: 27.04,
  //   top: -63+ 127.5,

  //   backgroundColor: '#2D9CDB',
  //  }, 
  // washer_union_rectangle_2: {

  //   position: 'absolute',
  //   width: 320,
  //   height: 43,
  //   left: 27.04,
  //   top: -63+ 105.5,

  //   backgroundColor: '#2D9CDB',
  //   borderRadius: 19,

  //  },


    washer_union_rectangle_1:{

    position: 'absolute',
    width: 320,
    height: 5,
    left: 27.04,
    top: -63+ 143.5,

    backgroundColor: '#2D9CDB',
   },
   washer_union_rectangle_2: {

    position: 'absolute',
    width: 320,
    height: 43,
    left: 27.04,
    top: -63+ 105.5,

    backgroundColor: '#2D9CDB',
    borderRadius: 19,

   },

  
    /******************/


  /*Washer Union Rectangle*/


  dryer_union_rectangle_1:{
    position: 'absolute',
    width: 320,
    height: 21,
    left: 27,
    top: -63+ 392,

    backgroundColor: '#2D9CDB',

  },

   dryer_union_rectangle_2:{
      position: 'absolute',
      width: 320,
      height: 43,
      left: 27,
      top: -63+ 370,

      backgroundColor: '#2D9CDB',
      borderRadius: 19,
   },

     /******************/

   /*Polygon Availability*/

  washer_polygon_avail:{
    position: 'absolute',
    width: 30,
    height: 30,
    left: 38,
    top: -63+ 161,

    backgroundColor: '#2D9CDB',
    borderRadius: 5,
    transform: [
      { skewX: '-18.69deg' },

    ],

  },

  washer_ellipse_avail:{
    position: 'absolute',
    width: 13,
    height: 12,
    left: 46.28,
    top: -63+ 169.5,
    borderRadius: 5,
    backgroundColor:'#F2F2F2',

  },
  washer_available_text:{
    position: 'absolute',
    width: 226,
    height: 27,
    left: 80.04,
    top: -63+ 161.5,

    fontFamily: 'Cochin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 30,
    fontSize: 18,

    color: '#000000',

  },

  washer_rectangle_notify:{
    position: 'absolute',
    width: 20,
    height: 20,
    left: 42.5,
    top: -63+ 215,

    backgroundColor: '#F2F2F2',
    borderColor:  '#2D9CDB',
    borderWidth: 2,
    borderRadius: 3,

  },

  washer_notify_checkmark:{
    position: 'absolute',
    width: 50,
    height: 50,
    left: 40,
    top: -63+ 212,

    color: '#27AE60'

  },

  washer_notify_text:{
    position: 'absolute',
    width: 268,
    height: 24,
    left: 79,
    top: -63+ 214,
    fontFamily: 'Cochin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,

    color: '#000000',

  },


  washer_rectangle_ping:{
    position: 'absolute',
    width: 20,
    height: 20,
    left: 42.5,
    top: -63+ 267,
    backgroundColor: '#F2F2F2',
    borderColor:  '#2D9CDB',
    borderWidth: 2,
    borderRadius: 3,

  },

   washer_ping_checkmark:{
    position: 'absolute',
    width: 50,
    height: 50,
    left: 40,
    top: -63+ 264,

    color: '#27AE60'

  },

  washer_ping_text:{
    position: 'absolute',
    width: 141,
    height: 22,
    left: 79,
    top: -63+ 266,

    fontFamily: 'Cochin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,

    color: '#000000',



  },




       /******************/


   /*Dryer Availability*/
   dryer_ellipse_avail:{
    position: 'absolute',
    width: 13,
    height: 12,
    left: 46.28,
    top: -63+ 436.37,
    borderRadius: 5,

    backgroundColor:'#F2F2F2',

   },
   dryer_polygon_avail:{
    position: 'absolute',
    width: 30,
    height: 30,
    left: 38,
    top: -63+ 428,

    backgroundColor: '#2D9CDB',
    borderRadius: 5,

    transform: [
      { skewX: '-18.69deg' },

    ],

  },
  dryer_available_text:{
    position: 'absolute',
    width: 226,
    height: 27,
    left: 80,
    top: -63+ 427,

    fontFamily: 'Cochin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 30,
    fontSize: 18,

    color: '#000000',
  },




  /******************/





})
