/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Col, Row, Spinner, CardGroup } from "react-bootstrap";
import { Search } from "components/Search";
import { getHomeData, searchUserByName, getNextAndBefore } from "services/api";
import { CardComponent } from "components/Card";
import { PaginationComponent } from "components/Pagination";
import _debounce from "lodash/debounce";
import "./home.css";

export const Home = () => {
   const [dropdownValue, setDropdownValue] = useState("Buscar por");
   const [searchValue, setSearchValue] = useState("films");
   const [characterName, setCharacterName] = useState("");
   const [listResult, setListResult] = useState([]);
   const [loading, setLoading] = useState(false);
   const [paginationParams, setPaginationParams] = useState({
      count: 0,
      next: "",
      previous: "",
      current: 3,
      active: 1,
   });

   const listResultMemo = useMemo(() => listResult?.map((user) => <CardComponent props={user} type={searchValue} />), [listResult, searchValue]);

   useEffect(() => {
      const localstorageType = localStorage.getItem("type");
      if (localstorageType) {
         setSearchValue(localstorageType);
      }
      getAllData();
   }, []);

   useEffect(() => {
      getAllData();
   }, [searchValue]);

   async function getAllData() {
      try {
         setLoading(true);
         const { count, next, previous, results } = await getHomeData(searchValue);
         setListResult(results);
         setPaginationParams({
            count: count,
            next: next,
            previous: previous,
            current: 1,
            active: 1,
         });
         setLoading(false);
      } catch (error) {
         console.log(error);
         setLoading(false);
      }
   }

   const PaginationChange = async (page) => {
      const { next, previous } = paginationParams;
      const url = new URL(next || previous);
      url.searchParams.set("page", page);
      getNextAndBefore(url.toString()).then(({ results, next, previous }) => {
         setPaginationParams((prev) => ({ ...prev, current: page, active: page, next, previous }));
         setListResult(results);
      });
   };

   const changeValue = (dropdownValue, searchValue) => {
      setCharacterName("");
      setDropdownValue(dropdownValue);
      setSearchValue(searchValue);
      setListResult([]);
   };

   const handleClearInput = () => {
      setCharacterName("");
      setDropdownValue("Buscar por");
      getAllData();
   };

   const getByname = (name, searchValue) => {
      setLoading(true);
      searchUserByName(searchValue, name)
         .then(({ results, count, next, previous }) => {
            setListResult(results);
            setPaginationParams({
               count: count,
               next: next,
               previous: previous,
               current: 1,
               active: 1,
            });
            setLoading(false);
         })
         .catch((error) => console.log(error));
   };

   const debouncedOnChange = useCallback(_debounce(getByname, 1000), []);

   const handleInput = (e) => {
      e.persist();
      setCharacterName(e.target.value);
      debouncedOnChange(e.target.value, searchValue);
   };

   return (
      <Container className="mt-5">
         <Row className="justify-content-md-center">
            <Col sx={12} md={8}>
               <Search
                  dropdownValue={dropdownValue}
                  changeValue={changeValue}
                  value={characterName}
                  inputOnchange={handleInput}
                  clearInput={handleClearInput}
               />
            </Col>
         </Row>
         <Row className="mt-5">
            {loading ? (
               <Row className="justify-content-center align-items-center h-100">
                  <Spinner animation="border" role="status" className="loading" />
               </Row>
            ) : (
               <CardGroup className="gap-2 ">{listResultMemo}</CardGroup>
            )}
         </Row>
         {loading ? (
            <Row className="justify-content-center align-items-center h-100">
               <Spinner animation="border" role="status" className="loading" />
            </Row>
         ) : (
            <Row className="mt-5">
               <Col>
                  <PaginationComponent paginationParams={paginationParams} PaginationChange={PaginationChange} />
               </Col>
            </Row>
         )}
      </Container>
   );
};
