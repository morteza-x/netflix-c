// import helper from "@/utils/helper";
// import { openDB } from "idb";

// export const dbPromise = (() => {
//   if (typeof window === "undefined") return {};

//   // open a database connection
//   const dbPromise = openDB("my-db", 2, {
//     // what is the upgrade? what upgrade does is to create a new store
//     upgrade(db: any) {
//       // create a new store
//       if (!db.objectStoreNames.contains("posts-store")) {
//         db.createObjectStore("posts-store", {
//           // keypath is the primary key
//           keyPath: "id",
//         });
//       }

//       // stores images
//       if (!db.objectStoreNames.contains("images-store")) {
//         db.createObjectStore("images-store", {
//           keyPath: "id",
//         });
//       }
//     },
//   });

//   return dbPromise || null;
// })();

// // adding or updating data
// export const addPost = async () => {
//   try {
//     // open the database
//     const db = await dbPromise;
//     // create a transaction
//     await db.put("posts-store", {
//       id: helper.generateId(),
//       description: "this is a second description",
//       image: "https://picsum.photos/200/300",
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// // reading data
// export const getPost = async (id: string) => {
//   try {
//     const db = await dbPromise;
//     // get one item
//     const item = await db.get("posts-store", id);
//     console.log(item);
//   } catch (error) {
//     console.error(error);
//   }
// };

// // get all the posts
// export const getPosts = async () => {
//   try {
//     const db = await dbPromise;
//     // get all the items
//     const items = await db.getAll("posts-store");
//     console.log(items);
//   } catch (error) {
//     console.error(error);
//   }
// };

// // delete a post
// export const deletePost = async (id: string) => {
//   try {
//     const db = await dbPromise;
//     // delete one item
//     await db.delete("posts-store", id);
//   } catch (error) {
//     console.error(error);
//   }
// };

// // upload an image
// export const uploadImage = async (image: any) => {
//   //return console.log(image);
//   try {
//     const db = await dbPromise;

//     const blob = new Blob([image], { type: image.type });

//     // store the blob in index db
//     await db.put("images-store", {
//       id: helper.generateId(),
//       image: blob,
//     });

//     console.log("image uploaded successfully");
//   } catch (error) {
//     console.error(error);
//   }
// };

// // get an image
// export const getImage = async (id: string) => {
//   try {
//     const db = await dbPromise;
//     // get one item
//     const item = await db.get("images-store", id);

//     if (item) {
//       // create an object url
//       const url = URL.createObjectURL(item.image);
//       console.log(url);
//       return url;
//     }
//     console.log(item);
//     return "";
//   } catch (error) {
//     console.error(error);
//   }
// };
