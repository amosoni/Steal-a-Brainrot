import { NextResponse } from 'next/server'

// 模拟游戏更新数据
const mockUpdates = [
  {
    id: 1,
    title: 'Nuevos Personajes Lanzados',
    description: 'Se han añadido 3 personajes divinos: Supreme Chad, Cosmic Sigma, Omnipotent Alpha',
    category: 'characters',
    date: '1 de Agosto, 2024',
    type: 'feature',
    version: 'v2.2.0'
  },
  {
    id: 2,
    title: 'Ajustes de Balance',
    description: 'Se han ajustado las proporciones de ganancia de algunos personajes para optimizar el balance del juego',
    category: 'balance',
    date: '1 de Agosto, 2024',
    type: 'balance',
    version: 'v2.2.0'
  },
  {
    id: 3,
    title: 'Optimización de Interfaz',
    description: 'Se ha mejorado la interfaz del juego, mejorando la experiencia del usuario',
    category: 'ui',
    date: '1 de Agosto, 2024',
    type: 'improvement',
    version: 'v2.2.0'
  }
]

// 模拟即将到来的更新
const mockUpcoming = [
  {
    id: 1,
    title: 'Nuevos Niveles de Rareza',
    description: 'Se espera lanzar personajes de nivel 8 de rareza la próxima semana',
    category: 'characters',
    date: 'Próxima semana',
    priority: 'high'
  },
  {
    id: 2,
    title: 'Optimización del Sistema de Rebirth',
    description: 'El sistema de rebirth recibirá mejoras importantes, aumentando la profundidad del juego',
    category: 'system',
    date: '2 semanas',
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Nuevo Modo de Juego',
    description: 'Próximamente se lanzará el modo cooperativo en equipo, con soporte para multijugador',
    category: 'gameplay',
    date: '1 mes',
    priority: 'high'
  }
]

export async function GET() {
  try {
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // 模拟随机新更新
    const hasNewUpdates = Math.random() > 0.7
    const newUpdates = hasNewUpdates ? [
      {
        id: Date.now(),
        title: 'Nueva Actualización Disponible',
        description: 'Se ha detectado una nueva actualización del juego',
        category: 'system',
        date: new Date().toLocaleDateString('es-ES'),
        type: 'feature',
        version: 'v2.2.1'
      }
    ] : []

    return NextResponse.json({
      success: true,
      lastCheck: new Date().toISOString(),
      hasNewUpdates,
      updates: [...newUpdates, ...mockUpdates],
      upcoming: mockUpcoming,
      gameVersion: 'v2.2.0',
      serverStatus: 'online'
    })
  } catch {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al verificar actualizaciones',
        serverStatus: 'offline'
      },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { action } = body

    switch (action) {
      case 'check_updates':
        // 模拟检查更新
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        const hasNewUpdates = Math.random() > 0.7
        return NextResponse.json({
          success: true,
          hasNewUpdates,
          lastCheck: new Date().toISOString(),
          message: hasNewUpdates ? 'Nueva actualización disponible' : 'No hay nuevas actualizaciones'
        })

      case 'enable_auto_refresh':
        return NextResponse.json({
          success: true,
          message: 'Auto-actualización habilitada',
          interval: 300000 // 5 minutos
        })

      case 'disable_auto_refresh':
        return NextResponse.json({
          success: true,
          message: 'Auto-actualización deshabilitada'
        })

      default:
        return NextResponse.json(
          { success: false, error: 'Acción no válida' },
          { status: 400 }
        )
    }
  } catch {
    return NextResponse.json(
      { success: false, error: 'Error en el servidor' },
      { status: 500 }
    )
  }
} 
 