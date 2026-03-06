import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, jsonb, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const states = pgTable("states", {
  id: serial("id").primaryKey(),
  stateNumber: integer("state_number").notNull().unique(),
  recruitingStatus: text("recruiting_status").notNull().default("Open"),
  playstyle: text("playstyle").notNull().default("Competitive"),
  language: text("language").notNull().default("English"),
  powerCapNotes: text("power_cap_notes").notNull().default(""),
  description: text("description").notNull().default(""),
  lastUpdated: text("last_updated").notNull().default("Just now"),
  topAlliancesCount: integer("top_alliances_count").notNull().default(0),
  politics: text("politics").notNull().default(""),
  napStability: text("nap_stability").notNull().default(""),
  svsCoordination: text("svs_coordination").notNull().default(""),
  dramaLevel: text("drama_level").notNull().default("Low"),
});

export const insertStateSchema = createInsertSchema(states).omit({ id: true });
export type InsertState = z.infer<typeof insertStateSchema>;
export type State = typeof states.$inferSelect;

export const alliances = pgTable("alliances", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  stateNumber: integer("state_number").notNull(),
  recruitingStatus: text("recruiting_status").notNull().default("Open"),
  requirements: text("requirements").notNull().default(""),
  lookingFor: text("looking_for").array().notNull().default(sql`'{}'::text[]`),
  openSlotsEstimate: integer("open_slots_estimate").notNull().default(0),
  description: text("description").notNull().default(""),
  lastUpdated: text("last_updated").notNull().default("Just now"),
  isSponsored: boolean("is_sponsored").notNull().default(false),
  logo: text("logo").notNull().default(""),
});

export const insertAllianceSchema = createInsertSchema(alliances).omit({ id: true });
export type InsertAlliance = z.infer<typeof insertAllianceSchema>;
export type Alliance = typeof alliances.$inferSelect;

export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  displayName: text("display_name").notNull(),
  currentStateNumber: integer("current_state_number").notNull(),
  powerBucket: text("power_bucket").notNull().default(""),
  furnaceLevel: text("furnace_level").notNull().default(""),
  roles: text("roles").array().notNull().default(sql`'{}'::text[]`),
  transferStatus: text("transfer_status").notNull().default("Browsing"),
  language: text("language").notNull().default("English"),
  playstyle: text("playstyle").notNull().default("Casual"),
  notesPublic: text("notes_public").notNull().default(""),
  visibility: boolean("visibility").notNull().default(true),
  lastUpdated: text("last_updated").notNull().default("Just now"),
  statsStatus: text("stats_status").notNull().default("Up to Date"),
  isPremium: boolean("is_premium").notNull().default(false),
  discord: text("discord").notNull().default(""),
  reputation: integer("reputation").notNull().default(50),
  endorsements: jsonb("endorsements").notNull().default(sql`'[]'::jsonb`),
  stats: jsonb("stats").notNull().default(sql`'{}'::jsonb`),
});

export const insertPlayerSchema = createInsertSchema(players).omit({ id: true });
export type InsertPlayer = z.infer<typeof insertPlayerSchema>;
export type Player = typeof players.$inferSelect;

export const transferGroups = pgTable("transfer_groups", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  status: text("status").notNull().default("Forming"),
  description: text("description").notNull().default(""),
  leader: text("leader").notNull().default(""),
  memberCount: integer("member_count").notNull().default(0),
  totalPower: text("total_power").notNull().default("0"),
});

export const insertTransferGroupSchema = createInsertSchema(transferGroups).omit({ id: true });
export type InsertTransferGroup = z.infer<typeof insertTransferGroupSchema>;
export type TransferGroup = typeof transferGroups.$inferSelect;
