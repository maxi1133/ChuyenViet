import React from "react";
import Table from "react-bootstrap/Table";
import { IconButton } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import "./quanly.scss";

export default function QuanlyA() {
  let a = [];
  a.length = 30;
  a.fill("qwe");

  return (
    <div className="card"
    style = {{
        
    }}
    >
      <Table responsive bordered hover size="sm" style={{ marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th style={{ width: "200px" }}>action</th>
          </tr>
        </thead>
        <tbody>
          {a.map((val, i) => {
            return (
              <tr key={i}>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <IconButton style={{ outline: "none" }}>
                    <EditOutlinedIcon />
                  </IconButton>

                  <IconButton onClick={(e) => {}} style={{ outline: "none" }}>
                    <DeleteOutlineIcon />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="Paginate">pav</div>
    </div>
  );
}
