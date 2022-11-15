const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getRunInfo = async (userId: number) => {
  const isLiked = await prisma.is_liked.findMany({
    where: { user_id: userId },
    select: {
      is_liked: true,
    },
  });
  console.log(isLiked);
  

  // const map1 = isLiked.map((x: { is_liked: boolean }) => x.is_liked);

  const user = await prisma.run.findMany({
    where: { user_id: userId },
    select: {
      id: true,
      title: true,
      routine: true,
      stage: true,
      // is_liked: {
      //   select: {
      //     is_liked: true,
      //   },
      // },
    },
  });
  const data = {
    user,
    isLiked: isLiked.map((x: { is_liked: boolean }) => x.is_liked)
  }

  return data;
};

//run에서 모든 정보를 읽는데 is_liked의 테이블의 is_liked 컬럼을 조인해야함
export default {
  getRunInfo,
};
