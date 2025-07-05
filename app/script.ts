import { PrismaClient } from './generated/prisma'

export const prismaClient = new PrismaClient();

export async function createUser(username: string, password: string) {

  const user = await prismaClient.user.create({
    data: {
      Username: username,
      password: password
    }
  })

  console.log('The value of the user saved  in db is', user)


}

// main()
// .then(async () => {
//   await prismaClient.$disconnect();
// })
// .catch(async (_err) => {
//   console.error(_err);
//   await prismaClient.$disconnect();
//   process.exit(1);
// })
