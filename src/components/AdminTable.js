"use client";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
  Badge,
} from "@chakra-ui/react";

import crimeRecord from "@/record.json";
import { badge } from "@/data.js";
import { useState } from "react";
import CrimeDetailsModal from "./CrimeDetailsModal";
import ComplainsTableControl from "./ComplainsTableControl";
import { tableHeaders } from "@/data.js";

export default function AdminTable() {
  const [crimeModal, setCrimeModal] = useState(false);
  const [currentCase, setCurrentCase] = useState(null);
  const [tableDisabled, setTableDisabled] = useState(false);

  const showCase = (item) => {
    setCurrentCase(item);
    setCrimeModal(true);
  };
  return (
    <div>
      <ComplainsTableControl setTableState={setTableDisabled} />
      <TableContainer>
        <Table variant="simple">
          {/* pointerEvents="none" */}

          <Thead>
            <Tr>
              {tableHeaders.map((headers) => (
                <Th key={headers.value}>{headers.title}</Th>
              ))}
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {crimeRecord?.map((item) => (
              <Tr key={item.caseId} style={{ textTransform: "uppercase" }}>
                <Td>{item.caseId}</Td>
                <Td>{item.stationId}</Td>
                <Td>{item.reporter}</Td>
                <Td>{item.natureOfCrime}</Td>
                <Td>{item.createdAt}</Td>
                <Td>
                  <Badge
                    variant="subtle"
                    colorScheme={badge[item.status].color}
                    p={2}
                    borderRadius="lg"
                  >
                    {badge[item.status].label}
                  </Badge>
                </Td>
                <Td>
                  <Flex justifyContent="space-around">
                    <Button
                      colorScheme="blue"
                      variant="link"
                      onClick={() => showCase(item)}
                      isDisabled={tableDisabled}
                    >
                      View
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <CrimeDetailsModal
        isOpen={crimeModal}
        closeModal={() => setCrimeModal(false)}
        currentCase={currentCase}
      />
      {/* {(classes, isOpen, closeModal, currentCase)} */}
      {/* <CrimeDetailsModal openModal={crimeModal} /> */}
    </div>
  );
}
