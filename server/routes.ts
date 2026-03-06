import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get("/api/states", async (_req, res) => {
    const allStates = await storage.getAllStates();
    res.json(allStates);
  });

  app.get("/api/states/:stateNumber", async (req, res) => {
    const stateNumber = parseInt(req.params.stateNumber);
    if (isNaN(stateNumber)) return res.status(400).json({ message: "Invalid state number" });
    const state = await storage.getStateByNumber(stateNumber);
    if (!state) return res.status(404).json({ message: "State not found" });
    res.json(state);
  });

  app.get("/api/alliances", async (_req, res) => {
    const allAlliances = await storage.getAllAlliances();
    res.json(allAlliances);
  });

  app.get("/api/alliances/:slug", async (req, res) => {
    const alliance = await storage.getAllianceBySlug(req.params.slug);
    if (!alliance) return res.status(404).json({ message: "Alliance not found" });
    res.json(alliance);
  });

  app.get("/api/players", async (_req, res) => {
    const allPlayers = await storage.getAllPlayers();
    res.json(allPlayers);
  });

  app.get("/api/players/:slug", async (req, res) => {
    const player = await storage.getPlayerBySlug(req.params.slug);
    if (!player) return res.status(404).json({ message: "Player not found" });
    res.json(player);
  });

  app.get("/api/transfer-groups", async (_req, res) => {
    const groups = await storage.getAllTransferGroups();
    res.json(groups);
  });

  return httpServer;
}
