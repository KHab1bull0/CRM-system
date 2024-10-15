
import { PrismaService } from "./prisma.service";




export async function seed() {
    const prisma = new PrismaService();
    await prisma.employee.create({
        data: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '+1234567890',
            position: 'Software Developer',
            salary: 50000,
            hireDate: new Date('2023-05-15'),
        },
    });
}

seed();