import { eq } from "drizzle-orm";
import { db } from "./db";
import {
  users, states, alliances, players, transferGroups,
  type User, type InsertUser,
  type State, type InsertState,
  type Alliance, type InsertAlliance,
  type Player, type InsertPlayer,
  type TransferGroup, type InsertTransferGroup,
} from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getAllStates(): Promise<State[]>;
  getStateByNumber(stateNumber: number): Promise<State | undefined>;
  createState(state: InsertState): Promise<State>;

  getAllAlliances(): Promise<Alliance[]>;
  getAllianceBySlug(slug: string): Promise<Alliance | undefined>;
  createAlliance(alliance: InsertAlliance): Promise<Alliance>;

  getAllPlayers(): Promise<Player[]>;
  getPlayerBySlug(slug: string): Promise<Player | undefined>;
  createPlayer(player: InsertPlayer): Promise<Player>;

  getAllTransferGroups(): Promise<TransferGroup[]>;
  createTransferGroup(group: InsertTransferGroup): Promise<TransferGroup>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getAllStates(): Promise<State[]> {
    return db.select().from(states);
  }

  async getStateByNumber(stateNumber: number): Promise<State | undefined> {
    const [state] = await db.select().from(states).where(eq(states.stateNumber, stateNumber));
    return state;
  }

  async createState(state: InsertState): Promise<State> {
    const [created] = await db.insert(states).values(state).returning();
    return created;
  }

  async getAllAlliances(): Promise<Alliance[]> {
    return db.select().from(alliances);
  }

  async getAllianceBySlug(slug: string): Promise<Alliance | undefined> {
    const [alliance] = await db.select().from(alliances).where(eq(alliances.slug, slug));
    return alliance;
  }

  async createAlliance(alliance: InsertAlliance): Promise<Alliance> {
    const [created] = await db.insert(alliances).values(alliance).returning();
    return created;
  }

  async getAllPlayers(): Promise<Player[]> {
    return db.select().from(players);
  }

  async getPlayerBySlug(slug: string): Promise<Player | undefined> {
    const [player] = await db.select().from(players).where(eq(players.slug, slug));
    return player;
  }

  async createPlayer(player: InsertPlayer): Promise<Player> {
    const [created] = await db.insert(players).values(player).returning();
    return created;
  }

  async getAllTransferGroups(): Promise<TransferGroup[]> {
    return db.select().from(transferGroups);
  }

  async createTransferGroup(group: InsertTransferGroup): Promise<TransferGroup> {
    const [created] = await db.insert(transferGroups).values(group).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
