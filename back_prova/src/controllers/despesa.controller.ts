import { Despesa } from "./../models/despesa.model";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DespesaController {
  async cadastrar(request: Request, response: Response): Promise<Response> {
    let despesa: Despesa = new Despesa();
    despesa.descricao = request.body.descricao;
    despesa.preco = Number.parseInt(request.body.preco);

    const despesaCadatrada = await prisma.despesa.create({
      data: {
        descricao: despesa.descricao,
        preco: despesa.preco,
      },
    });
    return response.status(201).json({ message: "Despesa cadastrada!", dados: despesaCadatrada });
  }

  async listar(request: Request, response: Response): Promise<Response> {
    const despesas = await prisma.despesa.findMany({});
    return response.status(200).json({ message: "Ok", dados: despesas });
  }

  async deletar(request: Request, response: Response): Promise<Response> {
    try {
      const despesa = await prisma.despesa.delete({
        where: {
          id: Number.parseInt(request.params.id),
        },
      });
      return response.status(200).json({ data: despesa });
    } catch (error) {
      return response.status(404).json({ message: "Despesa não encontrada!" });      
    }
  }
}


