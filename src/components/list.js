import React from "react";
import { Note } from "./note";
// import { chunk } from "lodash";

import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";
import { XMasonry, XBlock } from "react-xmasonry";
import "./list.css";

export const List = ({ notes, handleDelete, handleEdit }) => {
  return (
<Grid columns={3} style={{  display: 'grid',
  // gridTemplateColumns: '1fr',
  maxWidth: '70vw',
  margin: 'auto',
  padding: '1rem',
  zIndex: -100}}> 
<XMasonry>
    {notes.length
      ? notes.map((note) => (
          <XBlock key={note.id}>
            <Note note={note} handleDelete={handleDelete} handleEdit={handleEdit} />
          </XBlock>
        ))
      : null}
  </XMasonry></Grid>
  


    // <div>
    //   {" "}
    //   {chunk(notes, 3).map((chunks) => (
    //     <XMasonry style={{ margin: 50 }}>
    //       {chunks.map((note) => (
    //         <XBlock style={{ margin: 30 }} key={note.id}>
    //           <Note
    //             key={note.id}
    //             note={note}
    //             handleEdit={handleEdit}
    //             handleDelete={handleDelete}
    //             value
    //           />
    //         </XBlock>
    //       ))}
    //     </XMasonry>
    //   ))}
    // </div>

    // <div>
    //   {notes.map((note) => {
    //     return (
    //       <div>
    //         <Note note={note} />
    //       </div>
    //     );
    //   })}
    // </div>

    // <div
    //   style={{
    //     width: "80%",
    //     margin: "auto",
    //     display: "flex",
    //     flexDirection: "row",
    //   }}
    // >
    //   <Grid columns={3} padded>
    //     {chunk(notes, 3).map((chunks) => (
    //       <Grid.Row
    //         key={chunks[0].id}
    //         style={{
    //           paddingTop: 0,
    //           paddingBottom: 0,
    //           display: "flex",
    //           flexWrap: "wrap",
    //           flexDirection: "row",
    //           padding: 0,
    //         }}
    //       >
    //         {/* <Grid.Column columns={3} padded> */}
    //           {chunks.map((note) => {
    //             return (
    //               <Grid.Column style={{ flex: "33%", maxWidth: " 33%" }}>
    //                 <div key={note.title}>
    //                   <Note
    //                     key={note.id}
    //                     note={note}
    //                     handleEdit={handleEdit}
    //                     handleDelete={handleDelete}
    //                     value
    //                   />
    //                   {/* </Segment> */}
    //                 </div>
    //               </Grid.Column>
    //             );
    //           })}
    //         {/* </Grid.Column> */}
    //       </Grid.Row>
    //     ))}
    //   </Grid>
    // </div>

    // <div style={{ width: "80%", margin: "auto" }}>
    //   {/* <div
    //     style={{
    //       paddingTop: 0,
    //       paddingBottom: 0,
    //       display: "flex",
    //       flexWrap: "wrap",
    //       padding: 0,
    //     }}
    //   > */}
    //     {chunk(notes, 3).map((chunks) => (
    //       <div
    //         key={chunks[0].id}
    //         style={{
    //           paddingTop: 0,
    //           paddingBottom: 0,
    //           display: "flex",
    //           flexWrap: "wrap",
    //           padding: 0,
    //         }}
    //       >
    //         <div style={{ flex: "33%", maxWidth: " 33%" }}>
    //           {chunks.map((note) => {
    //             return (
    //               <div key={note.title}>
    //                 <div
    //                   style={{
    //                     marginTop: 4,
    //                     verticalAlign: "middle",
    //                     width: "100%",
    //                   }}
    //                 >
    //                   <Note
    //                     key={note.id}
    //                     note={note}
    //                     handleEdit={handleEdit}
    //                     handleDelete={handleDelete}
    //                     value
    //                   />
    //                 </div>

    //                 {/* </Segment> */}
    //               </div>
    //             );
    //           })}
    //         </div>
    //     </div>
    //     ))}
    //   </div>

    // </div>
  );
};
