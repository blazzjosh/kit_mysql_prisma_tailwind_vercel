import prisma from "$lib/prisma";


export const get = async ({ clientAddress, locals, params, platform, request, routeId, url }) => {
    const test = await prisma.Todo.findMany()
    return {
      body: {
        msg: test
      }
    };

}