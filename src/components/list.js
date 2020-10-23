import React from "react";
import { Note } from "./note";
import { chunk } from "lodash";

import "semantic-ui-css/semantic.min.css";
import { Grid, Segment } from "semantic-ui-react";
// import { XMasonry, XBlock } from "react-xmasonry";
import "./list.css";

export const List = ({ notes, handleDelete, handleEdit}) => {
  return (
    // <XMasonry style={{ margin: 50 }}>
    //   {notes.map((note) => (
    //     <XBlock style={{ margin: 30 }} key={note.id}>
    //       <Note
    //         note={note}
    //         // handleEdit={handleEdit}
    //         // handleDelete={handleDelete()}
    //       />
    //     </XBlock>
    //   ))}
    // </XMasonry>
    // <div>
    //   {notes.map((note) => {
    //     return (
    //       <div>
    //         <Note note={note} />
    //       </div>
    //     );
    //   })}
    // </div>
    <div style={{ width: "80%", margin: "auto" }}>
      <Grid columns={3} padded>
        {chunk(notes, 3).map((chunks) => (
          <Grid.Row key={chunks[0].id}>
            {chunks.map((note) => {
              return (
                <Grid.Column key={note.title}>
                  <Segment
                    style={{ borderStyle: "none", boxShadow: "none", backgroundColor:'none', zIndex:-10 }}
                    textAlign="center"
                  >
                    {/* <Header textAlign="center">{note.title}</Header> */}
                    <Note
                      key={note.id}
                      note={note}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                      value
                    />
                  </Segment>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        ))}
      </Grid>
    </div>
  );
};
