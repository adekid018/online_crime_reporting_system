// app/providers.tsx
"use client";

import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";

const {
  Button,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Textarea,
  Center,
  Box,
  Link,
  Flex,
  Spacer,
  Heading,
  FormControl,
  FormLabel,
  Badge,
  Avatar,
  VStack,
  StackDivider,
  Grid,
  GridItem,
  SimpleGrid,
  Icon,
  Card,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
  MenuDivider,
  MenuGroup,
  MenuItemOption,
  Checkbox,
  MenuOptionGroup,
  Progress,
  AspectRatio,
  Image,
  Img,
  IconButton,
  AvatarBadge,
  VisuallyHidden,
  Stack,
} = chakraTheme.components;
const _theme = extendBaseTheme({
  components: {
    Button,
    Input,
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Select,
    Textarea,
    Table,
    Thead,
    Text,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Flex,
    Spacer,
    Link,
    Heading,
    FormControl,
    FormLabel,
    Badge,
    Avatar,
    Link,
    VStack,
    StackDivider,
    Grid,
    GridItem,
    SimpleGrid,
    Icon,
    Card,
    MenuButton,
    Menu,
    MenuItem,
    MenuList,
    MenuDivider,
    MenuGroup,
    MenuButton,
    Menu,
    MenuItem,
    MenuList,
    MenuDivider,
    MenuGroup,
    MenuItemOption,
    MenuOptionGroup,
    Checkbox,
    Progress,
    AspectRatio,
    Image,
    Img,
    Icon,
    IconButton,
    AvatarBadge,
    VisuallyHidden,
    Stack,
  },
});

export default function Providers({ children }) {
  return <ChakraBaseProvider theme={_theme}>{children}</ChakraBaseProvider>;
}
