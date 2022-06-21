import prisma from "$lib/prisma";


export const get = async () => {
    const test = await prisma.Todo.findMany()
    return {
      body: {
        msg: test
      }
    };

}