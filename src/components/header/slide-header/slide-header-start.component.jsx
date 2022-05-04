import { Box, Button, Text } from "@chakra-ui/react";
import React from "react"
import { FaSimplybuilt } from "react-icons/fa"
import { motion } from "framer-motion";

import bgHeader from "../../../assets/images/slide-img/bg-header-1.jpg"
import { Link } from "react-router-dom";

const SliderHeaderStart = () => {
  return (
    <Box w={"full"} zIndex={3}>
      <Box
        position={"relative"}
        left={0}
        top={0}
        opacity={1}
        bgImage={bgHeader}
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        objectFit={"cover"}
        w={"1520px"}
        pt={"200px"}
        pb={"100px"}
        display={"flex"}
        justifyContent={"center"}
        fontFamily={"Nunito Sans"}
      >
        <Box maxW={"1200px"} w={"full"} px={"15px"}
        >
          <Box w={"full"} >
            <Box maxW={"650px"} >
              <motion.div key={0}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Box display={"flex"} alignItems={"center"} color={"#0a9a73"} mb={"20px"}>
                  <FaSimplybuilt />
                  <Text
                    ml={"6px"}
                    color={"#fff"}
                    fontWeight={"black"}
                    fontSize={"16px"}
                  >
                    Điểm đến hấp dẫn
                  </Text>
                </Box>
              </motion.div>
              <motion.div key={1}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 80 }}
                exit={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.9, delay: 1 }}
              >
                <Text
                  color={"#fff"}
                  mb={"20px"}
                  lineHeight={"50px"}
                  fontSize={"50px"}
                  fontWeight={"black"}
                  fontFamily={"Josefin Sans"}
                >
                 Bà Nà Hills <br /> Đường Lên Tiên Cảnh
                </Text>
              </motion.div>
              <motion.div key={2}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.2, delay: 1.5 }}
              >
                <Text px={"30px"} borderLeft={"1px"} color={"#d2e6ef"} fontSize={"16px"}>                  
                  Kiến trúc độc đáo.                
                  <br />
                  Sản phẩm của tập đoàn Sun Group.
                </Text>
              </motion.div>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.3, delay: 2 }}
              >
                <Link to="/shop">
                  <Button
                    mt={"40px"}
                    rounded={"none"}
                    height={"auto"}
                    py={"17px"}
                    px={"35px"}
                    border={"1px"}
                    borderColor={"#0A9A73"}
                    fontFamily={"Josefin Sans"}
                    bg={"#0A9A73"}
                    color={"white"}
                    fontWeight={"medium"}
                    _hover={{
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
                    Xem chi tiết
                  </Button>
                </Link>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

  )
}

export { SliderHeaderStart }
