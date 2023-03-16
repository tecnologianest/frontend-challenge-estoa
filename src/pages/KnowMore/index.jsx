import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Row, Spinner, Alert } from "react-bootstrap";
import { getAllData } from "services/api";
import { dataTypes } from "./dataType";
import "./knowMore.css";

export const KnowMore = () => {
   const navigate = useNavigate();
   const { id, type = "people" } = useParams();
   const [data, setData] = useState([]);
   const [loading, setloading] = useState(false);
   const [showAlert, setShowAlert] = useState(false);
   const [mgsAlertError, setMgsAlertError] = useState("");

   useEffect(() => {
      if (!id) {
         navigate("/");
      }
   }, [id, navigate]);

   useEffect(() => {
      async function getData() {
         setloading(true);
         try {
            const result = await getAllData(id, type);
            setData(result);
            setloading(false);
         } catch (error) {
            console.error(error);
            setloading(false);
            setMgsAlertError(error.message);
            setShowAlert(true);
         }
      }
      getData();
   }, [id, type]);

   const DataType = dataTypes[type];
   return loading ? (
      <Row className="justify-content-center align-items-center h-100">
         <Spinner animation="border" role="status" className="loading" />
      </Row>
   ) : (
      <>
         <Alert show={showAlert} variant="danger" className="mt-4">
            {mgsAlertError}
         </Alert>
         <DataType data={data} id={id} />
      </>
   );
};
