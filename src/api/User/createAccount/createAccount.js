import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createAccount: async (_, args) => {
            console.log(prisma);
            const { name, email, firstName = "", lastName = "", bio = "" } = args;
            const user = await prisma.createUser({ name, email, firstName, lastName, bio });
            return user;
        }
    }
};