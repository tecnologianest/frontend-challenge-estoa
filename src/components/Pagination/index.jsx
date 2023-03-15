import { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";

export const PaginationComponent = ({ paginationParams: { current, count, active }, PaginationChange }) => {
   const visible = 4;
   const total = Math.ceil(count / 10);
   const [leftLinks, setLeftLinks] = useState(Math.max(current - Math.floor(visible / 2), 1));
   const [rightLinks, setRightLinks] = useState(Math.min(current + Math.floor(visible / 2), total));
   const [items, setItems] = useState([
      <Pagination.Item key={1} active={1}>
         {1}
      </Pagination.Item>,
   ]);

   useEffect(() => {
      if (rightLinks - leftLinks < visible) {
         setRightLinks(Math.min(current + Math.floor(visible / 2), total));
         setLeftLinks(Math.max(current - Math.floor(visible / 2), 1));
      }
   }, [current, active, count, rightLinks, leftLinks, total]);

   useEffect(() => {
      if (count > 10) {
         const links = [];
         for (let i = leftLinks; i <= rightLinks; i++) {
            links.push(
               <Pagination.Item key={i} active={i === active} onClick={() => PaginationChange(i)}>
                  {i}
               </Pagination.Item>
            );
         }
         setItems(links);
      }
   }, [active, count, leftLinks, rightLinks, total, current, PaginationChange]);

   return (
      <Pagination className="justify-content-center">
         {current > 1 && (
            <>
               <Pagination.First onClick={() => PaginationChange(1)} />
               <Pagination.Prev onClick={() => PaginationChange(current - 1)} />
            </>
         )}
         {items}
         {current < total && (
            <>
               <Pagination.Next onClick={() => PaginationChange(current + 1)} />
               <Pagination.Last onClick={() => PaginationChange(total)} />
            </>
         )}
      </Pagination>
   );
};
